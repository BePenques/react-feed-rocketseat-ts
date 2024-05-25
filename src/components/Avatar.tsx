import { ImgHTMLAttributes } from 'react';
import styles from './Avatar.module.css'

interface avatarProps extends ImgHTMLAttributes<HTMLImageElement>{
    hasBorder?: boolean;
    // src: string;
    // alt?: string
}
export function Avatar({hasBorder = true, ...props}:avatarProps){/* desestruturação */
    return(
        <img 
            className={hasBorder ? styles.avatarWithBorder : styles.avatar } 
            // src={src}
            // alt={alt}
            {...props}/* defina dinamicamente cada propriedade que for passada*/
        />
    )

}