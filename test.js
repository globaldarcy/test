/*var FormApp = React.createClass({
	getInitialState:function(){
		return {
			inputValue:'input value',
			selectValue:'A',
			radioValue:'B',
			checkboxValues:[],
			textareValue:'some text here....'
		}
	},
	handleSubmit:function(e){
		e.preventDefault();
		var formData = {
			select:this.refs.goodSelect.value,
			textarea:this.refs.goodTextarea.value,
			radio:this.state.radioValue,
			checkbox:this.state.checkboxValues
		}
		console.log('the form sesult is:');
		console.log(formData);
		this.refs.goodRadio.saySomething();
	},
	handleRadio:function(e){
		this.setState({
			radioValue:e.target.value
		})
	},
	handleCheckbox:function(e){
		var checkboxValues = this.state.checkboxValues.slice();
		var newVal = e.target.value;
		var index = checkboxValues.indexOf(newVal);
		if(index == -1){
			checkboxValues.push(newVal)
		}else{
			checkboxValues.splice(index, 1);
		}
		this.setState({
			checkboxValues:checkboxValues
		})
	},
	render: function(){
		return(
			<form onSubmit={this.handleSubmit} >
				<input ref={function(comp){ReactDOM.findDOMNode(comp).focus()}} type="text" defaultValue={this.state.inputValue} />
				<br />
				<select defaultValue={this.state.selectValue} ref="goodSelect">
					<option value="A">A</option>
					<option value="B">B</option>
					<option value="C">C</option>
					<option value="D">D</option>
					<option value="E">E</option>
				</select>
				<br />
				<p>Radio Button</p>
				<RadioButtons ref="goodRadio" handleRadio={this.handleRadio} />
				<br />
				<Checkboxs handleCheckbox={this.handleCheckbox} />
				<br />
				<textarea defaultValue={this.state.textareValue} ref="goodTextarea"></textarea>
				<br />
				<button type="submit">Submit</button>
			</form>
		)
	}
});

var RadioButtons = React.createClass({
	saySomething:function(){
		alert("yo what's up man!")
	},
	render:function(){
		return(
			<span>
				A<input onChange={this.props.handleRadio} name="goodRadio" type="radio" value="A"/>
				B<input onChange={this.props.handleRadio} name="goodRadio" type="radio" defaultChecked value="B"/>
				C<input onChange={this.props.handleRadio} name="goodRadio" type="radio" value="C"/>
			</span>
		)
	}
});

var Checkboxs = React.createClass({
	render:function(){
		return(
			<span>
				A<input onChange={this.props.handleCheckbox} name="goodCheckbox" type="checkbox" value="A"/>
				B<input onChange={this.props.handleCheckbox} name="goodCheckbox" type="checkbox" value="B"/>
				C<input onChange={this.props.handleCheckbox} name="goodCheckbox" type="checkbox" value="C"/>
			</span>
		)
	}
})

var FormApp =  ReactDOM.render(
	<FormApp />,
	document.getElementById('app')
)*/


/*var ClickApp = React.createClass({
	getInitialState:function(){
		return {
			clickCount:0
		}
	},
	handleClick:function(){
		this.setState({
			clickCount:this.state.clickCount + 1
		})

	},
	render: function(){
		return(
			<div>
				<h2>click this button</h2>
				<button onClick={this.handleClick}>click me</button>
				<p>count:{this.state.clickCount}</p>
			</div>
		)
	}
});*/


/*var ClickApp = React.createClass({
	getInitialState:function(){
		return {
			isVisible:true,
			
			subMessages:[
				'我会代码搬砖',
				'我会花式搬砖',
				'不说了, 搬砖去了.'
			]
		}
	},
	render: function(){
		return(
			<div>
				<h2>{this.props.titleMessage}</h2>
				<Submessage msg={this.state.subMessages} />
			</div>
		)
	}
});

var Submessage = React.createClass({
	proTypes:{
		msg:React.PropTypes.array.isRequired,
	},
	getDefaultProps() {
		return{
			msg:['默认子消息']
		}
	},
	render:function(){
		var msgs = [];
		this.props.msg.forEach(function(msgss, i){
			msgs.push(
				<p>码农说: {msgss}</p>
			)
		});
		return(
			<h3>{msgs}</h3>
		)
	}
});
var titleMessage = '你好世界(来自props)';
var clickComponent = ReactDOM.render(
	<ClickApp titleMessage={titleMessage}/>,
	document.getElementById('app')
)*/

/*var ClickApp = React.createClass({
	getInitialState:function(){
		return {
			clickCount:0
		}
	},
	handleClick:function(e){
		this.setState({
			clickCount:this.state.clickCount + 1
		})
		console.log(e.nativeEvent);
	},
	render: function(){
		return(
			<div>
				<h2>click this button</h2>
				<button onClick={this.handleClick}>click me</button>
				<p>count:{this.state.clickCount}</p>
			</div>
		)
	}
});

var clickComponent = ReactDOM.render(
	<ClickApp />,
	document.getElementById('app')
)*/


/*var FormApp = React.createClass({
	getInitialState:function(){
		return {
			inputValue:'input value',
			selectValue:'A',
			radioValue:'B',
			textareValue:'some text here....'
		}
	},
	handleSubmit(e){
		e.preventDefault();
		console.log('form submitting....');
		console.log(this.refs['godInput'].value);
	},
	render: function(){
		return(
			<form onSubmit={this.handleSubmit}>
				<input ref="godInput" type="text" defaultValue={this.state.inputValue} />
				<br />
				<select ref="godSelect" defaultValue={this.state.selectValue} >
					<option defaultValue="A">A</option>
					<option defaultValue="B">B</option>
					<option defaultValue="C">C</option>
					<option defaultValue="D">D</option>
					<option defaultValue="E">E</option>
				</select><br />
				<input name="goodRadio" type="radio" defaultValue="A" defaultChecked />
				<input name="goodRadio" type="radio" defaultValue="B" />
				<input name="goodRadio" type="radio" defaultValue="C" />
				<br />
				<input name="goodRadio" type="checkbox" defaultValue="A" />
				<input name="goodRadio" type="checkbox" defaultValue="B" />
				<input name="goodRadio" type="checkbox" defaultValue="C" defaultChecked />
				<br />
				<textarea ref="godTextarea" defaultValue={this.state.textareValue}></textarea>
				<br />
				<button>提交</button>
			</form>
		)
	}
});

var FormApp = ReactDOM.render(
	<FormApp />,
	document.getElementById('app')
)*/


var FormApp = React.createClass({
	mixins:[React.addons.LinkedStateMixin],
	getInitialState:function(){
		return {
			msg:'react is awesome!',
			isReactAwesome:true
		}
	},
	render: function(){
		return(
			<div>
				<h1>我会花式搬砖: {this.state.msg}</h1>
				<h2>React是不是很好用? {this.state.isReactAwesome ? '非常好用' : "一般般..."}</h2>
				<input type="text" valueLink={this.linkState('msg')} />
				<br />
				<input type="checkbox" checkedLink={this.linkState('isReactAwesome')} />
				<br />
				<SubComp msgLink={this.linkState('msg')} boxLink={this.linkState('isReactAwesome')} />
			</div>
		)
	}
});
var SubComp = React.createClass({
	render: function(){
		return(
			<div>
				<h4>这是一个子组件</h4>
				{/*<SubSubComp msgLink={this.props.msgLink} boxLink={this.props.boxLink} />*/}
				<SubSubComp {...this.props} />
			</div>
		)
	}
});

var SubSubComp = React.createClass({
	render: function(){
		return(
			<div>
				<p>你想说什么</p>
				<input type="text" valueLink={this.props.msgLink} />
				<br />
				<p>你小混混</p>
				<input type="checkbox" checkedLink={this.props.boxLink} />
			</div>
		)
	}
});
var FormApp = ReactDOM.render(
	<FormApp />,
	document.getElementById('app')
)