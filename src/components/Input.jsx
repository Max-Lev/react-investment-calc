export default function Input({ label, value, onChange, children, ...props }) {

    const isChildrenContent = (children) => {
        if (children) {
            return children;
        } else {
            return <label htmlFor={label}>{label}</label>
        }
    }

    return <>
        <div>
            {isChildrenContent(children)}
            <input
                {...props}
                value={value}
                onChange={onChange}
            />
        </div>
    </>
}