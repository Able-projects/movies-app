import React, {Component} from 'react'
import { Menu, Dropdown,Button, Input} from 'antd';
import { DownOutlined, SearchOutlined, EnvironmentOutlined, UserOutlined } from '@ant-design/icons';

class Header extends Component{
    state = {
        visible: false
    }
    setVisible = () => {
        this.setState({visible: !this.state.visible})
    }
   
    render(){
        const menu = (
            <Menu>
              <Menu.Item>
                <a target="_blank" rel="noopener noreferrer" href="http://www.alipay.com/">
                  О нас
                </a>
              </Menu.Item>
              <Menu.Item>
                <a target="_blank" rel="noopener noreferrer" href="http://www.taobao.com/">
                  Hollywood
                </a>
              </Menu.Item>
            </Menu>
          );
          const menu2 = (
            <Menu>
              <Menu.Item>
                <a target="_blank" rel="noopener noreferrer" href="http://www.alipay.com/">
                   Как подключить
                </a>
              </Menu.Item>
              <Menu.Item>
                <a target="_blank" rel="noopener noreferrer" href="http://www.taobao.com/">
                  Оплата
                </a>
              </Menu.Item>
              <Menu.Item>
                <a target="_blank" rel="noopener noreferrer" href="http://www.taobao.com/">
                  Сериалы
                </a>
              </Menu.Item>
              <Menu.Item>
                <a target="_blank" rel="noopener noreferrer" href="http://www.taobao.com/">
                  Мултьфильмы
                </a>
              </Menu.Item>
            </Menu>
          );
          const menu3 = (
            <Menu>
              <Menu.Item>
                <a target="_blank" rel="noopener noreferrer" href="http://www.alipay.com/">
                  RU
                </a>
              </Menu.Item>
              <Menu.Item>
                <a target="_blank" rel="noopener noreferrer" href="http://www.taobao.com/">
                  EN
                </a>
              </Menu.Item>
            </Menu>
          );
        return(
            <section className='header-section'>
                <div>
                    <img src='https://sweet.tv/images/v2/logo_sweettv.svg' alt='logo'></img>
                </div>
                { !this.state.visible ? 
                <div className='nav-links'>
                    <div><p>ТВ</p></div>
                    <div><p>Фильмы</p></div>
                    <div><p>Премьеры</p></div>
                    <div><p>Тарифы</p></div>
                    <div><p>Промокод</p></div>
                    <Dropdown overlay={menu}>
                    {/* eslint-disable-next-line */}
                        <a className="ant-dropdown-link" onClick={e => e.preventDefault()}>
                        Компания<DownOutlined />
                        </a>
                    </Dropdown>
                    <Dropdown overlay={menu2} >
                         {/* eslint-disable-next-line */}
                        <a className="ant-dropdown-link" onClick={e => e.preventDefault()}>
                        Ещё<DownOutlined />
                        </a>
                    </Dropdown>
                </div>:
                null }
                {this.state.visible ? 
                    <Input className='search-input' placeholder='Поиск'></Input>:
                    null 
                    }
                <div>
                    
                    <SearchOutlined className='header-icon' onClick={() => this.setVisible()}/>
                    <EnvironmentOutlined className='header-icon'/>
                    <Dropdown overlay={menu3} id='dropdawn-language'>
                         {/* eslint-disable-next-line */}
                        <a id='dropdawn-language' onClick={e => e.preventDefault()}>
                        RU<DownOutlined />
                        </a>
                    </Dropdown>
                    <Button id='login-btn'>
                        <UserOutlined className='header-icon' />
                        Войти
                    </Button>
                </div>
            </section>
        )
    }
}

export default Header;