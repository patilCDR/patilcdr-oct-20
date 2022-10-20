import React from 'react';
import Button from 'react-bootstrap/Button';

import AppModal from '../../utils/AppModal';
import CardBody from './CardBody';
import CardFooter from './CardFooter';
import CardHeader from './CardHeader';

const MainPage = () => {
  const [modalShow, setModalShow] = React.useState(true);

  return (
    <main>
      <section className='chat-section'>
        <Button variant='primary' onClick={() => setModalShow(true)}>
          Chat with us
        </Button>
        <AppModal show={modalShow} onHide={() => setModalShow(false)} title='Create a new post'>
          <div className='container'>
            {/* Header section */}
            <CardHeader />

            {/* Body section */}
            <CardBody />

            {/* Footer section */}
            <CardFooter />
          </div>
        </AppModal>
      </section>
    </main>
  );
};

export default MainPage;
