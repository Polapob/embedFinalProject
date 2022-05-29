import React from 'react';
import 'antd/dist/antd.min.css';
import './MainPage.css';
import { Row, Modal, Typography } from 'antd';
import Header from '../components/MainPage/Header';
import NormalMode from '../components/MainPage/NormalMode';
import AutoMode from '../components/MainPage/AutoMode';
import useCreateData from '../hooks/useCreateData';
import useSelectMode from '../hooks/useSelectMode';

const MainPage = () => {
  const [handleDataChange, handleOnSave] = useCreateData();
  const [
    disabled,
    toggleDisabled,
    selectedState,
    openModal,
    closeModal,
    handleNormalModeClick,
    handleAutoModeClick,
  ] = useSelectMode();
  return (
    <div className="mainBackground">
      <Header toggleDisabled={toggleDisabled} />
      <Row
        className="MainGrid"
        justify="space-between"
        style={{ position: 'relative', alignItems: 'flex-start' }}
      >
        <NormalMode
          disabled={disabled}
          selectedState={selectedState.selectedState}
          handleOnClick={handleNormalModeClick}
          handleDataChange={handleDataChange}
          handleOnSave={handleOnSave}
        />
        <AutoMode
          disabled={disabled}
          selectedState={selectedState.selectedState}
          handleOnClick={handleAutoModeClick}
        />
      </Row>
      <Modal
        className="removeCancelButton"
        title="Warning"
        visible={openModal}
        onOk={closeModal}
        closable={false}
        style={{
          fontSize: '16px',
          fontWeight: 'bold',
        }}
        centered
      >
        <Typography style={{ fontWeight: 'bold', fontSize: '20px' }}>
          You must Wait for
          {' '}
          {selectedState.counter}
          {' '}
          second to change Mode.
        </Typography>
      </Modal>
    </div>
  );
};
export default MainPage;
