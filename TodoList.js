export default class TodoList extends React.Component {
	constructor(props) {
		super(props);
		let todos;
		this.storage = typeof Storage !== 'undefined';
		if (this.storage) {
			todos = JSON.parse(localStorage.getItem('todos'));
			if (!todos) {
				todos = [];
			}
		} else {
			todos = [];
		}
		this.state = {
			new: '',
			todos
		};
	}

	_add = () => {
		this.setState(
			{
				new: '',
				todos: [[this.state.new, false], ...this.state.todos]
			},
			this._updateStorage
		);
	};

	_delete = index => {
		const todos = this.state.todos;
		todos.splice(index, 1);
		this.setState({ todos }, this._updateStorage);
	};

	_toggleCheck = (event, index) => {
		const todo = this.state.todos[index];
		todo[1] = event.target.checked;
		const todos = this.state.todos;
		todos.splice(index, 1, todo);
		this.setState({ todos }, this._updateStorage);
	};

	_updateStorage = () => {
		if (this.storage) {
			localStorage.setItem('todos', JSON.stringify(this.state.todos));
		}
	};

	render() {
		return (
			<div>
				<header className='header'>
					<h1>Todo-list</h1>
					<p>
						Easily keep track of your todos.
						{this.storage &&
							' Your todos will be stored even if you close the tab.'}
					</p>
					<div>
						<input
							type='text'
							value={this.state.new}
							onChange={event => this.setState({ new: event.target.value })}
						/>
						<button onClick={this._add}>Add</button>
					</div>
				</header>
				<section className='todos'>
					{this.state.todos.map((todo, index) => (
						<label className='todo' key={index}>
							<input
								type='checkbox'
								checked={todo[1]}
								onChange={event => this._toggleCheck(event, index)}
							/>
							<span className='checkmark' />
							<p>{todo[0]}</p>
							<button className='delete' onClick={() => this._delete(index)}>
								X
							</button>
						</label>
					))}
				</section>
			</div>
		);
	}
}
