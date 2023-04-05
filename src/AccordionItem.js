import { useState } from "react";

function AccordionItem({title, description}) {
    const [isActive, setActive] = useState(false);
    const switchActive = () => {setActive(!isActive)};

    return (
        <div>
            <div onClick={switchActive}>
                {title}
            </div>
            {isActive && <div>{description}</div>}
        </div>
    );
}

export default AccordionItem;