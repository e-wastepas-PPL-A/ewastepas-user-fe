/* eslint-disable react/prop-types */
const InputText = ({ label, value, onChange }) => {
  return (
    <div className="mb-2 relative">
      <label className="block text-gray-700 font-semibold mb-1">{label}</label>
      <input
        type="text"
        value={value}
        onChange={onChange}
        className="w-full px-3 py-2 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary"
        required
      />
    </div>
  );
};

export default InputText;
