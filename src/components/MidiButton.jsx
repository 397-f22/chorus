import React, { Component } from 'react';
import MIDISounds from 'midi-sounds-react';

const instruments = [4, 318, 387, 258, 619, 628, 816]

class MidiButton extends Component {
	constructor(props) {
		super(props);
		this.state = {
			selectedInstrument: 4
			,cached:true
			,key: props.key
		};
	}
	
	componentDidMount() {
		this.setState(this.state);
	}
	onSelectInstrument(e){
		var list=e.target;
		let n = list.options[list.selectedIndex].getAttribute("value");
		this.setState({
			selectedInstrument: n
			,cached:false
		});
		this.midiSounds.cacheInstrument(n);
		var me=this;
		this.midiSounds.player.loader.waitLoad(function () {
			me.setState({
				selectedInstrument: n,
				cached:true
			});
		});
	}
	createSelectItems() {
		if (this.midiSounds) {
			if (!(this.items)) {
				this.items = [];
				for (let i = 0; i < instruments.length; i++) {
					this.items.push(<option key={instruments[i]} value={instruments[i]}>{'' + (i + 0) + '. ' + this.midiSounds.player.loader.instrumentInfo(instruments[i]).title}</option>);
				}
			}
			return this.items;
		}
	}
	playTestInstrument(key) {
		this.midiSounds.playChordNow(this.state.selectedInstrument, [60], 2.5);
	}
  render() {
    return (
      <div className="App">
       
        <p className="App-intro">Select instrument and press Play.</p>		
		<p><select value={this.state.selectedInstrument} onChange={this.onSelectInstrument.bind(this)}>{this.createSelectItems()}</select></p>
		<p><button onClick={this.playTestInstrument.bind(this)} disabled={!this.state.cached}>Play</button></p>
		<p>Component</p>
		<MIDISounds ref={(ref) => (this.midiSounds = ref)} appElementName="root" instruments={[4]} />	
		<hr/>
      </div>
    );
  }
}

export default MidiButton;