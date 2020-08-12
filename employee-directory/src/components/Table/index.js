import React, { Component, useState } from "react";
import Cell from "../Cell";

class EmployeeTable extends Component {
    renderHeaderRow = (_cell, cellIndex) => {
        const { headings } = this.props;

        return (
            <Cell
                key={`heading-${cellIndex}`}
                content={headings[cellIndex]}
                header={true}
            />
        )
    };

    renderRow = (_row, rowIndex) => {
        const { rows } = this.props;

        return (
            <tr key={`row-${rowIndex}`}>
                {rows[rowIndex].map((_cell, cellIndex) => {
                    return (
                        <Cell
                            key={`${rowIndex}-${cellIndex}`}
                            content={rows[rowIndex][cellIndex]}
                        />
                    )
                })}
            </tr>
        )
    }

    render() {
        const { headings, rows } = this.props;

        this.renderHeaderRow = this.renderHeaderRow.bind(this);
        this.renderRow = this.renderRow.bind(this);

        const markup = (
            <tr key="heading">
                {headings.map(this.renderHeaderRow)}
            </tr>
        );

        const bodyMarkup = rows.map(this.renderRow);

        return (
            <table className="Table">
                <thead>{markup}</thead>
                <tbody>{bodyMarkup}</tbody>
            </table>
        );
    }
}

export default EmployeeTable;