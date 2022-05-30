const QnADrawerPage = () => {
  return (
    <div>
      <h2>상품문의</h2>
    </div>
  );
};

export default QnADrawerPage;

const Drawer = ({children, isOpen, onClose}) => {
  return (
    <div className="drawerShadow">
      <div className="drawer">
        <button onClick={onClose}>X</button>
        {children}
      </div>
    </div>
  )
}

// event bubbling
// 
