import React, { Component } from 'react';
import css from './ColorPicker.module.css';

//-------вариант обычной css не  module.css
// import './ColorPicker.css';

// class ColorPicker extends Component {
//   state = { activeOptionIdx: 2 };

//   makeOptionClassName = index => {
//     const optionClasses = ['ColorPicker__option'];
//     if (index === this.state.activeOptionIdx) {
//       optionClasses.push('ColorPicker__option--active');
//     }
//     console.log(1, optionClasses);
//     return optionClasses.join(' ');
//   };

//   render() {
//     return (
//       <div className="ColorPicker">
//         <h2 className="ColorPicker__title">Color Picker</h2>
//         <div>
//           {this.props.options.map(({ label, color }, index) => {
//             const optionClassName = this.makeOptionClassName(index);
//             return (
//               <button
//                 key={label}
//                 // className={css.ColorPicker__option.join(' ')}
//                 className={optionClassName}
//                 style={{ backgroundColor: color }}
//               ></button>
//               // если нам не надо дополнительній класс вводить
//               //   <button
//               //     key={label}
//               //     className={css.ColorPicker__option}
//               //     style={{
//               //       backgroundColor: color,
//               //       border:
//               //         index === this.state.activeOptionIdx
//               //           ? '5px solid black'
//               //           : 'none',
//               //     }}
//               //   ></button>
//             );
//           })}
//         </div>
//       </div>
//     );
//   }
// }
// export default ColorPicker;
// ---------------------------

class ColorPicker extends Component {
  state = { activeOptionIdx: 1 };
  setActiveIdx = index => {
    this.setState({ activeOptionIdx: index });
  };

  makeOptionClassName = index => {
    const optionClasses = [css.ColorPicker__option];
    if (index === this.state.activeOptionIdx) {
      optionClasses.push(css['ColorPicker__option--active']);
    }
    return optionClasses.join(' ');
  };

  render() {
    // патерн деструктуризация стейтов и пропсов в методе рендер
    const { activeOptionIdx } = this.state;
    const { options } = this.props;
    const activeOption = options[activeOptionIdx];

    // const activeOption = this.props.options[this.state.activeOptionIdx];
    const { label } = activeOption;
    return (
      <div className={css.ColorPicker}>
        <h2 className={css.ColorPicker__title}>Color Picker</h2>
        <p>Вибраный цвет: {label} </p>
        <div>
          {this.props.options.map(({ label, color }, index) => {
            // const optionClassName = this.makeOptionClassName(index);
            return (
              <button
                key={label}
                className={this.makeOptionClassName(index)}
                style={{ backgroundColor: color }}
                onClick={() => this.setActiveIdx(index)}
              ></button>
            );
          })}
        </div>
      </div>
    );
  }
}
export default ColorPicker;
