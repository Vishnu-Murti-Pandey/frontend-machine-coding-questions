import { useEffect, useRef } from "react"

const CreateHook = (name, props) => {

    const prevProps = useRef();

    useEffect(() => {
        if (prevProps.current) {
            const keys = Object.keys({ ...prevProps.current, ...props });
            console.log({ keys });

            const whyUpdated = {};

            keys.forEach((key) => {
                if (typeof prevProps.current[key] === 'object' && typeof props[key] === 'object') {
                    if (JSON.stringify(prevProps.current[key]) !== JSON.stringify(props[key])) {
                        whyUpdated[key] = {
                            from: prevProps.current[key],
                            to: props[key]
                        }
                    }
                } else {
                    if (prevProps.current[key] !== props[key]) {
                        whyUpdated[key] = {
                            from: prevProps.current[key],
                            to: props[key]
                        }
                    }
                }
            });

            if (Object.keys(whyUpdated).length) {
                console.log("This has caused re-render", whyUpdated);
            }
        }
        prevProps.current = props;
    }, [name, props])

}

export default CreateHook