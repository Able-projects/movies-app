import React, {Component} from 'react'
import {InstagramOutlined,FacebookOutlined,TwitterOutlined,UpOutlined} from '@ant-design/icons'
class Footer extends Component{
    render(){
        let upScroll = () =>{
            window.scrollTo(0,0)
        }
        return(
            <section className='footer'>
                <div className='footer-row'>
                    <div>
                        <h2 className='footer-h2'>Меню</h2>
                        <p>Главная</p>
                        <p>Премьеры</p>
                        <p>ТВ</p>
                        <p>Фильмы</p>
                        <p>Тарифы</p>
                        <p>О нас</p>
                        <p>Hollywood</p>
                        <p>Контакты</p>
                        <p>Договор</p>
                        <p>Политика конфиденциальности</p>
                    </div>
                    <div>
                        <h2 className='footer-h2'>Телефоны</h2>
                        <span>(бесплатно)</span>
                        <p>2121</p>
                        <span>Vodafone</span>
                        <p>+38 050 647 88 88</p>
                        <span>Lifecell</span>
                        <p>+38 073 647 88 88</p>
                        <span>Киевстар</span>
                        <p>+38 068 647 88 88</p>
                    </div>
                    <div>
                        <h2 className='footer-h2'>E-mail</h2>
                        <p>info@sweet.tv</p>
                        <span>По вопросам авторских прав</span>
                        <p>sweet.tv-copyright@axghouse.com</p>
                        <h2 className='footer-h2'>Адрес</h2>
                        <p>03124, г. Киев, ул. Н. Василенко, 7, бизнес-центр GELIOS</p>
                        <span>Мы в соцсетях</span>
                        <div className='footer-div'>
                            <InstagramOutlined className='footer-icons' />
                            <FacebookOutlined className='footer-icons' />
                            <TwitterOutlined className='footer-icons' />
                        </div>
                    </div>
                    <div className='last-item'>
                        <h2 className='footer-h2'>Приложения sweet.tv</h2>
                        <img src='https://sweet.tv/images/v2/Google_Play_ru.svg' alt='google-play'/>
                        <img src='https://sweet.tv/images/v2/App_Store_ru.svg' alt='google-play'/>
                        <img src='https://sweet.tv/images/v2/Smart_tv_ru.svg' alt='google-play'/>
                        <img src='https://sweet.tv/images/v2/App_Gallery_Huawei_ru.svg' alt='google-play'/>
                    </div>
                </div>
                <button onClick={() => (upScroll())}>
                    <UpOutlined />
                </button>
                <div>
                    <p className='footer-p'>© SWEET.TV 2020. Все права защищены. <br></br>Контент защищен Axghouse AntiPiracy LLC.</p>
                </div>
               
            </section>
        )
    }
}

export default Footer;