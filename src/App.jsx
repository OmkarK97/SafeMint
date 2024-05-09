import { ConnectButton } from '@rainbow-me/rainbowkit';
import {
  useAccount,
  useWriteContract,
} from "wagmi";
import './App.css'
import abi from './NftAbi.json';


function App() {
  const { address } = useAccount();
  console.log(address)

  const {
    // data,
    writeContract: writeContract1,
  } = useWriteContract();

  const {
    // data,
    writeContract: writeContract2,
  } = useWriteContract();

  const handleFunctionName1 = (e) => {
    e.preventDefault();
    try {
      writeContract1({
        abi,//abi 
        address: "",// jo address pr call krna hai (String)
        functionName: "",//naam function ka (String),
        args: [] //arguments [array],
      });
    } catch (error) {
      console.error("An error occurred", error);
    }
  };

  const handleFunctionName2 = (e) => {
    e.preventDefault();
    try {
      writeContract2({
        abi,//abi 
        address: "",// jo address pr call krna hai (String)
        functionName: "",//naam function ka (String),
        args: [] //arguments [array],
      });
    } catch (error) {
      console.error("An error occurred", error);
    }
  };

  return (
    <>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <ConnectButton />
      </div>
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <div style={{ padding: '10px', margin: '10px' }}>
          <button onClick={handleFunctionName1} style={{ marginRight: '10px' }}>Button1</button>
          <button onClick={handleFunctionName2} style={{ marginLeft: '10px' }}>Button2</button>
        </div>
      </div>

    </>
  )
}

export default App
