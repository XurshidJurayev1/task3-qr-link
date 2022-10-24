import { HashLoader } from 'react-spinners';

const Loader = () => {
  return (<div>

    <div style={{ width: '100%', minHeight: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <HashLoader color="#5FB5F3" size={70} speedMultiplier="2" />
    </div>
  </div>);
};
export default Loader