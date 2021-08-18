import Reac, { useState } from 'react'
import { Input, Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap'

const IpfsForm = (props) => {
  const {
    buttonLabel,
    className
  } = props;

  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);

  return(
    <div>
      <Button color="secondary" onClick={toggle}>{buttonLabel}
      Mint a Meme</Button>
      <Modal isOpen={modal} toggle={toggle} className={className}>
        <ModalHeader toggle={toggle}>Meme Minter</ModalHeader>
          <ModalBody>
            <Input placeholder="IPFS Address"></Input>
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={toggle}>Mint</Button>{' '}
            <Button color="danger" onClick={toggle}>Cancel</Button>
          </ModalFooter>
        </Modal>
      </div>
  )
}

export default IpfsForm
