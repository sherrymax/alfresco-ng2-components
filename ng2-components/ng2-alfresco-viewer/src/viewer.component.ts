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

import { Component, Input, Output, HostListener } from 'angular2/core';
import { EventEmitter } from 'angular2/src/facade/async';
import { PdfViewerComponent } from './pdfViewer.component';

declare let __moduleName: string;

@Component({
    moduleId: __moduleName,
    selector: 'alfresco-viewer',
    directives: [PdfViewerComponent],
    templateUrl: './viewer.component.html',
    styleUrls: ['./viewer.component.css']
})
export class ViewerComponent {

    @Input()
    urlFile: string;

    @Input()
    overlayMode: boolean = false;

    @Input()
    showViewer: boolean = true;

    @Output()
    showViewerChange: EventEmitter<boolean> = new EventEmitter<boolean>();

    nameFile: string;
    currentPdfDocument: any;
    page: number;
    displayPage: number;
    totalPages: number;

    extension: string;

    ngOnChanges(changes) {
        if (this.showViewer) {
            if (!this.urlFile) {
                throw new Error('Attribute urlFile is required');
            }
            return new Promise((resolve) => {
                if (this.urlFile) {
                    this.nameFile = this.getFilenameFromUrl(this.urlFile);
                    this.extension = this.getFileExtension(this.nameFile);
                }
                resolve();
            });
        }

    }

    /**
     * close the viewer
     */
    close() {
        this.showViewer = false;
        this.showViewerChange.emit(this.showViewer);
    }

    /**
     * get File name from url
     */
    getFilenameFromUrl(url: string) {
        let anchor = url.indexOf('#');
        let query = url.indexOf('?');
        let end = Math.min(
            anchor > 0 ? anchor : url.length,
            query > 0 ? query : url.length);
        return url.substring(url.lastIndexOf('/', end) + 1, end);
    }

    /**
     * Get the token from the local storage
     *
     * @param {string} fileName - file name
     * @returns {string} file name extension
     */
    private getFileExtension(fileName: string) {
        return fileName.split('.').pop().toLowerCase();
    }

    /**
     * check if the current file is a suppoerted image extension
     */
    private isImage() {
        return this.extension === 'png' || this.extension === 'jpg' ||
            this.extension === 'jpeg' || this.extension === 'gif' || this.extension === 'bmp';
    }

    /**
     * check if the current file is a suppoerted pdf extension
     */
    private isPdf() {
        return this.extension === 'pdf';
    }

    /**
     * check if the current file is not a supported extension
     */
    private notSupportedExtension() {
        return !this.isImage() && !this.isPdf();
    }

    /**
     * Litener Keyboard Event
     * @param {KeyboardEvent} event
     */
    @HostListener('document:keydown', ['$event'])
    handleKeyboardEvent(event: KeyboardEvent) {
        let key = event.keyCode;
        if (key === 27) { //esc
            this.close();
        } else if (key === 39) { //right arrow
            //this.nextPage();
        } else if (key === 37) {//left arrow
            //this.previousPage();
        }
    }
}
