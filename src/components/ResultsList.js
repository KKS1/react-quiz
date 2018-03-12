import React from 'react';
import * as _ from 'lodash';
import { ListItem } from "./ListItem";
import '../App.css';

export const ResultsList = (props) => {
    const results = props.results;

    const listItems = results.map((result, index) => {
        return (
            <ListItem key={index} className={'Results-list-item'}
                value={ (result.correct ? ' + ' : ' - ' ) +  _.unescape(result.question) } />
        )
    });

    return (
        <ul className="Results-list">
            {listItems}
        </ul>
    );      
}