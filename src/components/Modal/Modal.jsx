import React, {Component} from "react";
import {createPortal} from 'react-dom'
import css from './Modal.module.css'

const modalRoot = document.querySelector('#modal-root')
export default class Modal extends Component {


componentDidMount() {
    window.addEventListener('keydown', this.handleKeyDown);
  }

  componentWillUnmount() {
    //     console.log('Modal componentWillUnmount') 
    // чтобы не срабатывал слушатель после закрытия модалки, иначе будет вечно реагировать на эскейп
    window.removeEventListener('keydown', this.handleKeyDown);
  }
  
// // закрываем модалку по клику на эскейп   
  handleKeyDown = (event) => {
    if (event.code === 'Escape') {
      this.props.onClose(); // Проверьте, что здесь вызывается onClose
    }
  }
// закрываем модалку по клику на бекдроп   
handleBackdropClick = event => {
    console.log('клик в серый фон')
    console.log(event.currentTarget, event.target)
    if(event.currentTarget===event.target){
        this.props.onClose()
    }
}


     render(){
        return createPortal(

            <div className={css.Modal__backdrop} onClick={this.handleBackdropClick}>
                <div className={css.Modal__content}>{this.props.children}</div>
            </div>,
            modalRoot,
        );
     }
}