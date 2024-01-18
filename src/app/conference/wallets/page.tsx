import toast from 'react-hot-toast';

export default function WalletPage() {
  const handleAddWallet = () => {
    toast.error('an error occured');
  };
  return (
    <div className='w-full'>
      <div>
        <button onClick={handleAddWallet}>Add Wallet</button>
      </div>

      <div className='w-full'>
        <div>
          <table>
            <thead>
              <tr>
                <th>Wallet Type</th>
                <th>Wallet Address</th>
                <th>BarCode</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              <tr></tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
