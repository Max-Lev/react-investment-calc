export default function Input({ label, value, onChange, children,sub: subtitle, ...props }) {

    const isChildrenContent = (children) => {
        if (children) {
            return children;
        } 
        // else {
        //     return <label htmlFor={props.id}>{props.id}</label>
        // }
    }

    return <>
            {isChildrenContent(children)}
            <input
                {...props}
                value={value}
                onChange={onChange}
            />
            {subtitle}
    </>
}