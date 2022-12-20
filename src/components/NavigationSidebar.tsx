import { NavLink } from 'react-router-dom';
import classNames from 'classnames';
import useClickAway from '../hooks/useClickAway';

type Props = {
    visible: Boolean;
    setMenuVisible: Function;
};

const NavigationSidebar = ({
                               visible,
                               setMenuVisible,
                           }: Props) => {
    const { ref } = useClickAway({ action: setMenuVisible });

    return (
        <div
            className={classNames('menu position-fixed shadow slide-in', {
                menu__visible: visible,
            })}
            ref={ref}
            role="navigation"
        >
            <div className="body-3 text-black-700 m-24 mb-40">
                Switch between search and input
            </div>
            <div className="pb-16">
                <NavLink
                    to="/"
                    className="row p-10 menu__item text-decoration-none"
                    onClick={() => setMenuVisible(false)}
                >
                    <div className="col-auto">
                        <i className="material-icons">manage_search</i>
                    </div>
                    <div className="col-auto ps-0">Search synonyms</div>
                </NavLink>
                <NavLink
                    to={`/new`}
                    className="row p-10 mb-8 menu__item text-decoration-none"
                    onClick={() => setMenuVisible(false)}
                >
                    <div className="col-auto">
                        <i className="material-icons">post_add</i>
                    </div>
                    <div className="col-auto ps-0">
                        Add new synonyms
                    </div>
                </NavLink>
            </div>
        </div>
    );
};

export default NavigationSidebar;