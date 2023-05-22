import React from 'react';
import {NumberInput} from "@mantine/core";

function NumberInputStyled(props) {
    return (
        <div>
            <NumberInput
                data-elem={props.elemType}
                size="md"
                value={props.value}
                onChange={props.onChange}
                min={0}
                max={1000000}
                step={1000}
                radius="8px"
                styles={{
                    controlUp: {
                        border: 0,
                        color: "#ACADB9"
                    },
                    controlDown: {
                        border: 0,
                        color: "#ACADB9"
                    },
                    rightSection: {width: "auto"}
                }} />
        </div>
    );
}

export default NumberInputStyled;