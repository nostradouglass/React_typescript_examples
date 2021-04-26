import ReactDOM from 'react-dom'
//import Parent from './props/parent'
//import GuestList from './state/GuestList'
//import UserSearch from './state/UserSearch'
//import EventComponent from './events/EventComponent'
import UserSearch from './refs/UserSearch'

const App = () => {
    return (
        <div>
            {/* <h1>Hi</h1>
            <Parent /> */}
            {/* <UserSearch /> */}
            {/* <GuestList /> */}
            {/* <EventComponent /> */}
            <UserSearch />
        </div>
    )
}

ReactDOM.render(
    <App />,
    document.querySelector('#root')
)