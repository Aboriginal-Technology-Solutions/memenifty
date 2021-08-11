import Footer from './footer.tsx'
import MainNav from './Navbar.tsx'
import ConnectMetaMask from './web3container.tsx'
import MainBody from './mainbody.tsx'

export default class Components extends React.Component {
  state = {
    seen: false
  }

  togglePop = () => {
    this.setState({
      seen: !this.state.seen
    })
  }

  render() {
  return (
   <div>
    <div className="btn" onClick={this.togglePop}>
      <button>New User?</button>
    </div>
    {this.state.seen ? <PopUp toggle={this.togglePop} /> : null}
   </div>
  );
 }
}
}
