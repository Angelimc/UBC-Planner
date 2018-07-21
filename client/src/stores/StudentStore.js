import { LOG_IN, LOG_OUT } from '../constants/LoginConstants';
import BaseStore from './BaseStore';
// import jwt_decode from 'jwt-decode';

class StudentStore extends BaseStore {

    constructor() {
        super();
        this.subscribe(() => this._registerToActions.bind(this));
        this._user = null;
        this._jwt = null;
    }

    _registerToActions(action) {
        // switch(action.actionType) {
        //     case LOG_IN:
        //         this._jwt = action.jwt;
        //         // this._user = jwt_decode(this._jwt); TODO
        //         this._user = {
        //             email: action.user.email,
        //             password: action.user.password,
        //             name: action.user.name,
        //             sid: action.user.sid,
        //             cohort: action.user.cohort
        //         };
        //         this.emitChange();
        //         break;
        //     case LOG_OUT:
        //         this._user = null;
        //         this.emitChange();
        //         break;
        //     default:
        //         break;
        // }
    }

    get user() {
        return this._user;
    }

    get jwt() {
        return this._jwt;
    }

    isLoggedIn() {
        return !!this._user;
    }
}

export default new StudentStore();