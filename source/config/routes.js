/**
 * Route Mappings
 * (sails.config.routes)
 *
 * Your routes tell Sails what to do each time it receives a request.
 *
 * For more information on configuring custom routes, check out:
 * https://sailsjs.com/anatomy/config/routes-js
 */

module.exports.routes = {

  /***************************************************************************
  *                                                                          *
  * Make the view located at `views/homepage.ejs` your home page.            *
  *                                                                          *
  * (Alternatively, remove this and add an `index.html` file in your         *
  * `assets` directory)                                                      *
  *                                                                          *
  ***************************************************************************/

  'POST /api/v1/shipper/create': { action: 'shipper/create' },
  'POST /api/v1/shipper/accept-order':{ action: 'shipper/accept-order' },
  'POST /api/v1/shipper/cancel-order':{ action: 'shipper/cancel-order' },
  'POST /api/v1/shipper/list-order':{ action: 'shipper/list-order' },
  'POST /api/v1/shipper/login':{ action: 'shipper/login' },
  'POST /api/v1/shipper/received-food':{ action: 'shipper/received-food' },
  'POST /api/v1/shipper/shipped-food':{ action: 'shipper/shipped-food' },
  
  /***************************************************************************
  *                                                                          *
  * More custom routes here...                                               *
  * (See https://sailsjs.com/config/routes for examples.)                    *
  *                                                                          *
  * If a request to a URL doesn't match any of the routes in this file, it   *
  * is matched against "shadow routes" (e.g. blueprint routes).  If it does  *
  * not match any of those, it is matched against static assets.             *
  *                                                                          *
  ***************************************************************************/


};
