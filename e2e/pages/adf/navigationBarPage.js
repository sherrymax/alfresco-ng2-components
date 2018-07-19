/*!
 * @license
 * Copyright 2016 Alfresco Software, Ltd.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

var Util = require('../../util/util');

var NavigationBarPage = function () {

    var contentServicesButton = element(by.css("a[data-automation-id='Content Services']"));
    var configEditoButton = element(by.css("a[data-automation-id='Config editor']"));
    var processServicesButton = element(by.css("a[data-automation-id='Process Services']"));
    var loginButton = element(by.css("a[data-automation-id='Login']"));
    var trashcanButton = element(by.css("a[data-automation-id='Trashcan']"));
    var userProfileButton = element(by.css("div[data-automation-id='user-profile']"));
    var themeButton = element(by.css("button[data-automation-id='theme menu']"));
    var themeMenuContent = element(by.css("div[class*='mat-menu-panel']"));
    var logoutButton = element(by.css("a[adf-logout]"));
    var cardViewButton = element(by.cssContainingText(".sidenav-menu-label", "CardView"));

    /**
     * Click Content Services Button
     * @method clickContentServicesButton
     */
    this.clickContentServicesButton = function () {
        Util.waitUntilElementIsVisible(contentServicesButton);
        contentServicesButton.click();
    };

    /**
     * Click on Config Editor Button
     * @method clickContentServicesButton
     */
    this.clickConfigEditorButton = function () {
        Util.waitUntilElementIsVisible(configEditoButton);
        configEditoButton.click();
    };

    /**
     * Click Process Services Button
     * @method clickProcessServicesButton
     */
    this.clickProcessServicesButton = function () {
        Util.waitUntilElementIsVisible(processServicesButton);
        processServicesButton.click();
    };

    /**
     * Click Login Button
     * @method clickLoginButton
     */
    this.clickLoginButton = function () {
        Util.waitUntilElementIsVisible(loginButton);
        loginButton.click();
    };

    this.clickTrashcanButton = function () {
        Util.waitUntilElementIsVisible(trashcanButton);
        trashcanButton.click();
    };

    this.clickUserProfile = function () {
        Util.waitUntilElementIsVisible(userProfileButton);
        userProfileButton.click();
    };

    this.clickThemeButton = function () {
        Util.waitUntilElementIsVisible(themeButton);
        themeButton.click();
        Util.waitUntilElementIsVisible(themeMenuContent);
    };

    this.clickOnSpecificThemeButton = function (themeName) {
        var themeElement = element(by.css("button[data-automation-id='" + themeName + "']"));
        Util.waitUntilElementIsVisible(themeElement);
        Util.waitUntilElementIsClickable(themeElement);
        themeElement.click();
    };

    /**
     * Click Logout Button
     * @method clickLogoutButton
     */
    this.clickLogoutButton = function () {
        Util.waitUntilElementIsVisible(logoutButton);
        logoutButton.click();
    };

    /**
     * Click Card View Button
     * @method clickCardViewButton
     */
    this.clickCardViewButton = function () {
        Util.waitUntilElementIsVisible(cardViewButton);
        cardViewButton.click();
    };

};

module.exports = NavigationBarPage;
