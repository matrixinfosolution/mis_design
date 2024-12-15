import React,{Component} from 'react';
import Checkbox from './Checkbox';
import './Check.css'

class CheckboxGroup extends Component {
    constructor(props) {
      super(props);
      this.state = {
        selectedCheckbox: null,
      };
    }
  
    handleCheckboxChange = (event) => {
      this.setState({
        selectedCheckbox: event.target.value,
      });
    };
  
    render() {
      const options = ['Accessories(2)', 'Blouses(4)', 'Dresses(1)','Hoodies(2)','Knitwear(7)','Outwear(9)','Pants(4)','Shirts(3)','Shorts(1)','Skirts(2)','Tshirts(7)'];
  
      return (
        <div className='container-fluid'>
                      <section className='row mt-3'>
                    <aside className='col-3'>
                      <table className="table table-hover">
                        <thead>
                          <h1>Products Type</h1></thead>
                        <tbody>
                
          {options.map((option) => (
            <tr>
              <td>
            <Checkbox
              label={option}
              value={option}
              isSelected={this.state.selectedCheckbox === option}
              onCheckboxChange={this.handleCheckboxChange}
              key={option}
            />
            </td>
           </tr>
           
        
          ))}
          </tbody>
          </table>
          </aside>
          </section>
        </div>
      );
    }
  }
  export default CheckboxGroup;