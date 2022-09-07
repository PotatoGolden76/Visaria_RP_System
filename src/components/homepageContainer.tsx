import classNames from 'classnames';
import React from 'react';
import image from '../assets/homeBg.jpg'

export default function HomepageContainer(props: any) {
    const tailwindStyles = [
        "min-h-screen",
        "w-full",
        "h-auto",
        "m-0",
        "p-4",
        "flex",
        "gap-8",
        "flex-wrap",
        "justify-evenly",
        "items-center",
        "backdrop-blur"]
    //HACK: revise this
    //Not sure how...handy doing Tailwind properties like this is
    //     ¯\_(ツ)_/¯


    return (
        <div className={classNames("w-full min-h-screen h-auto m-0 p-0 bg-fixed bg-center bg-cover")} style={{ backgroundImage: 'url(' + image + ')' }}>
            <div className={classNames(tailwindStyles)}>
                {React.Children.map(props.children, child => {
                    if(React.Children.count(props.children) > 4) {
                        return React.cloneElement(child, {
                            small: true
                        })
                    } else {
                        return child
                    }
                }
                )}
            </div>
        </div>
    );
}

