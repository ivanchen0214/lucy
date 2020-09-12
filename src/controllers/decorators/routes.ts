import 'reflect-metadata';
import { RequestHandler } from 'express';
import { MetadataKeys } from './MetadataKeys';
import { Methods } from './Methods';

interface RouterHandlerDescriptor extends PropertyDescriptor {
  value?: RequestHandler;
}

function routerBinder(method: string) {
  return function (path: string) {
    return function (
      arget: any,
      key: string,
      desc: RouterHandlerDescriptor
    ) {
      Reflect.defineMetadata(MetadataKeys.path, path, target, key);
      Reflect.defineMetadata(MetadataKeys.method, method, target, key);
    }
  }
}

export const get = routerBinder(Methods.get);
export const put = routerBinder(Methods.put);
export const post = routerBinder(Methods.post);
export const del = routerBinder(Methods.delete);
export const patch = routerBinder(Methods.put);