import React from 'react'

import { ButtonComponent } from '../Button/Button';
import { Tile } from "../Tile/Tile"


export const TileSection = ({ data, header, buttonText }) => {

    return (
        <div className="tileSection">
            <h1>{header}</h1>
            <div>
                { 
                    data.map(({ title, description, iconName }) => {
                        return (
                        <Tile
                            title={title}
                            description={description}
                            iconName={iconName}
                        >
                        </Tile>
                        )
                    })
                }
            </div>
            <ButtonComponent children={buttonText}></ButtonComponent>
        </div>

    )
};
