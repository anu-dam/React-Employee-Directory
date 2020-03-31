import React, { Component } from 'react';
import Material from 'material-table';
import "../App.css"

class Table extends Component {
   
    render() { 
        return (
            <Material id="table"
                title="EMPLOYEE DETAILS"
                columns={[
                    {
                        field: "fn",
                        title: "FIRST NAME"

                    },{
                        field: "ln",
                        title: "LAST NAME"

                    },{
                        field: "id",
                        type: "numeric",
                        title: "EMPLOYEE ID"

                    },{
                        field: "title",
                        title: "JOB TITLE",
                        lookup: {
                             1: "BUSINESS ANALYST",
                             2: "REACT DEVELOPER",
                             3: "PROJECT MANAGER",
                             4: "SOFTWARE ENGINEER",
                             5: "QA ENGINEER"                            
                        }
                    }
                ]}

                data={[
                    {fn: "Anu", ln: "DAMBALADENIYA", id: 43163950, title: 1},
                    {fn: "Patrick", ln: "ANDERSON", id: 43163951, title: 2},
                    {fn: "Rey", ln: "PAUL", id: 43163952, title: 3},
                    {fn: "Barndon", ln: "SHOW", id: 43163953, title: 2},
                    {fn: "Ted", ln: "OLIVER", id: 43163954, title: 5},
                    {fn: "John", ln: "DAVID", id: 43163955, title: 1},
                    {fn: "May", ln: "AUSTIN", id: 43163956, title: 2},
                    {fn: "Oliver", ln: "MAY", id: 43163957, title: 3},
                    {fn: "Lilly", ln: "JUNE", id: 43163958, title: 5},
                    {fn: "Kal", ln: "MAYER", id: 43163959, title: 3},
                    {fn: "Ed", ln: "johns", id: 43163960, title: 1},
                    {fn: "Arianna", ln: "SPEED", id: 43163961, title: 2},
                    {fn: "Amber", ln: "WEST", id: 43163962, title: 3},
                    {fn: "Chris", ln: "LIONEL", id: 43163963, title: 5},
                    {fn: "Grey", ln: "NICHOLAS", id: 43163964, title: 3},
                    {fn: "Li", ln: "NEESAM", id: 43163965, title: 4},
                    {fn: "Harlly", ln: "EDWARDS", id: 43163966, title: 2},
                    {fn: "Niel", ln: "JOHNSON", id: 43163967, title: 1},
                    {fn: "Lewis", ln: "RUTHERFORD", id: 43163968, title: 5},
                    {fn: "Angi", ln: "DANIELS", id: 43163969, title: 4},
                    {fn: "North", ln: "DAVID", id: 43163970, title: 3},
                    {fn: "Meadow", ln: "LEE", id: 43163971, title: 2},
                    {fn: "Meli", ln: "ANGER", id: 43163972, title: 1},
                    {fn: "John", ln: "FLINT", id: 43163973, title: 2},
                    {fn: "Richard", ln: "GERE", id: 43163974, title: 3},
                    {fn: "Godi", ln: "NICHOLAS", id: 43163975, title: 5},
                    {fn: "Dimple", ln: "SILVA", id: 43163976, title: 1},
                    {fn: "Sean", ln: "PAUL", id: 43163977, title: 2}
                ]}
            />
          );
    }
}
 
export default Table;
