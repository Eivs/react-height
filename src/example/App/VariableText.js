import React from 'react';
import createReactClass from 'create-react-class';
import {shouldComponentUpdate} from 'react/lib/ReactComponentWithPureRenderMixin';
import ReactHeight from '../../ReactHeight';
import text from './../text.json';
import css from './App.css';


const getText = num => text.slice(0, num).map((p, i) => <p key={i}>{p}</p>);


const VariableText = createReactClass({
  getInitialState() {
    return {paragraphs: 0, height: -1};
  },


  shouldComponentUpdate,


  render() {
    const {height, paragraphs} = this.state;

    return (
      <div>
        <div className={css.config}>
          <label className={css.label}>
            Paragraphs:
            <input className={css.input}
              type="range"
              value={paragraphs} step={1} min={0} max={4}
              onChange={({target: {value}}) => this.setState({paragraphs: parseInt(value, 10)})} />
            {paragraphs}
          </label>
          <label className={css.label}>
            Content height:
            <b className={css.input}>{height}px</b>
          </label>
        </div>

        <ReactHeight
          onHeightReady={value => this.setState({height: value})}
          className={css.content}>
          {paragraphs ? getText(paragraphs) : <p>No text</p>}
        </ReactHeight>
      </div>
    );
  }
});


export default VariableText;
