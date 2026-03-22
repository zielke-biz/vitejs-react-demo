import { Component, type ReactNode } from "react";
import { createAvatar } from '@dicebear/core';
import { lorelei } from '@dicebear/collection';

interface ButtonProps {
    onClick: () => void;
    svg: string; // Prop for the SVG code
}

const Button: React.FC<ButtonProps> = ({ onClick, svg }) => (
    <button onClick={onClick}>
        <div dangerouslySetInnerHTML={{ __html: svg }} />
    </button>
);


class Avatar extends Component {

    render(): ReactNode {
        const svgString = "<svg width='50' height='50'><circle cx='10' cy='10' r='5' stroke='black' strokeWidth='3' fill='red' /></svg>";
        return <>
            <Button
                onClick={() => console.log('Svg')}
                svg={svgString}
            />
            <div>
                <img src={this.generateNewAvatar().toDataUri()} alt="Avatar" />
            </div>
        </>
    }


    generateNewAvatar() {
        const avatar = createAvatar(lorelei, {
            seed: 'Friday',
        });
        return avatar;
    }
}

export default Avatar