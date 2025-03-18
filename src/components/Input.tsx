interface InputProps {
  label: string;
}
export default function Input(props: InputProps) {
  return (
    <div className="flex flex-col gap-2">
      <label className="text-blue-950">{props.label}</label>
      <input type="text" className="border border-blue-900" />
    </div>
  );
}
