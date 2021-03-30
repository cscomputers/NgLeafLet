import { Injectable } from '@angular/core';

import { AuthUserPermissions } from '../models/auth-user-permission';
import { UsuarioService } from './usuario.service';

@Injectable({
  providedIn: 'root'
})
export class PermissionService {

  constructor(private usuarioService: UsuarioService) { }

  /**
   * Retorna permissões básicas de crud.
   * @param controller 
   */
  getBasicPermissions(controller: string): AuthUserPermissions {

    let permission: AuthUserPermissions = new AuthUserPermissions();

    const user = this.usuarioService.getUsuario();
    const profiles = user.profiles;

    if(user.is_admin == true) {
      permission.list = true;
      permission.load = true;
      permission.create = true;
      permission.update = true;
      permission.delete = true;
    } else {
      profiles.forEach(profile => {
        profile.permissions.forEach(perm => {
          if(perm.controller == controller) {
           switch (perm.action) {
             case 'list': permission.list = true; break;
             case 'load': permission.load = true; break;
             case 'create': permission.create = true; break;
             case 'update': permission.update = true; break;
             case 'delete': permission.delete = true; break;
           }
          }
        });
      });
    }

    return permission;
  } 

}
