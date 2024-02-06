const Main = () => {
  const Clicks = () => {
      console.log('Clicked');
  };
  return (
    <div>
      <button onClick={Clicks}>Click</button>
    </div>
  );
}

export default Main;