import { createAvatar } from '@dicebear/core';
import { lorelei } from '@dicebear/collection';

interface ButtonProps {
    onClick: () => void;
    svg: string; // Prop for the SVG code
}

interface AvatarProps {
    seed: string;
}

const Button: React.FC<ButtonProps> = ({ onClick, svg }) => (
    <button onClick={onClick}>
        <div dangerouslySetInnerHTML={{ __html: svg }} />
    </button>
);


const Avatar: React.FC<AvatarProps> = ({ seed }) => {
    const generateNewAvatar = (seed: string) => {
        const avatar = createAvatar(lorelei, {
            seed: seed,
        });
        return avatar;
    }
    const svgString = "<svg width='50' height='50'><circle cx='10' cy='10' r='5' stroke='black' strokeWidth='3' fill='red' /></svg>";
    return <>
        <Button
            onClick={() => console.log('Svg')}
            svg={svgString}
        />
        <div>
            <img src={generateNewAvatar(seed).toDataUri()} alt="Avatar" />
        </div>
    </>
}

export default Avatar