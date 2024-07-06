import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

const NotificationModal = ({ show, onClose }) => {
  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    if (show) {
      const storedNotifications = JSON.parse(localStorage.getItem('notifications') || '[]');
      setNotifications(storedNotifications);
      localStorage.removeItem('notifications');
    }
  }, [show]);

  return (
    show && (
      <ModalOverlay onClick={onClose}>
        <ModalContent onClick={(e) => e.stopPropagation()}>
          <Content>
            <Heading>Notifications</Heading>
            {notifications.length === 0 ? (
              <Notification>No notifications</Notification>
            ) : (
              <NotificationList>
                {notifications.map((notification, index) => (
                  <Notification key={index}>{notification}</Notification>
                ))}
              </NotificationList>
            )}
          </Content>
        </ModalContent>
      </ModalOverlay>
    )
  );
};

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: flex-end;
  align-items: flex-start;
  z-index: 1000;
`;

const ModalContent = styled.div`
  background: white;
  position: relative;
  top: 8%;
  right: 3%;
  padding: 20px;
  border-radius: 8px;
  display: flex;
  flex-wrap: wrap;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
`;

const Content = styled.div`
  width: 500px; /* Adjusted width to make the container smaller */
`;

const Heading = styled.h2`
  text-align: center;
  color: darkblue;
  font-weight: bold;
  margin-bottom: 20px;
`;

const NotificationList = styled.div`
  max-height: 300px; /* Adjust the height as needed */
  overflow-y: auto;
`;

const Notification = styled.p`
  background-color: #f0f0f0;
  border-left: 5px solid #3498db;
  padding: 10px;
  margin: 10px 0;
  font-size: 14px;
`;

export default NotificationModal;
