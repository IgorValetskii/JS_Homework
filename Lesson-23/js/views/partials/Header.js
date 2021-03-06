import Component from '../../views/Component.js';

class Header extends Component {
    render() {
        const resource = this.request.resource;
        //resource = "tasks"

        return new Promise(resolve => {
            resolve(`
                 <header class="header">                    
                     <a class="header__link ${!resource ? 'active' : ''}" href="/#/">
                         About
                     </a>
                     <a class="header__link ${resource === 'tasks' ? 'active' : ''}" href="/#/tasks">  <!--resource = "tasks"  -->
                         Tasks List
                     </a>                                            
                </header>
            `);
        });
    }
}

export default Header;