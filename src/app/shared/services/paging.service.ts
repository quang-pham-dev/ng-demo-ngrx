import { Injectable } from '@angular/core';
import { Paging } from '../models/paging';

@Injectable()
export class PagingService {

  constructor() { }

  firstLoad(totalItems: number, pageSize: number): Paging {
    let pages: Array<number> = [];
    let endItem: number;
    let totalPages: number;
    if (totalItems % pageSize === 0) {
      totalPages = totalItems / pageSize
    } else {
      totalPages = Math.floor(totalItems / pageSize) + 1;
    }
    for (let i = 1; i <= totalPages; i++) {
      pages.push(i);
    }
    endItem = pageSize;
    if (endItem >= totalItems) {
      endItem = totalItems;
    }
    pages = this.buttonShow(3, 1, totalPages);
    const paging: Paging = {
      currentPage: 1,
      pageSize: pageSize,
      totalPages: totalPages,
      pages: pages,
      totalItems: totalItems,
      startItem: 1,
      endItem: endItem
    };
    return paging;
  }

  pageChanges(currentPage: number, pageSize: number, pages: Array<number>, totalItems: number): Paging {
    let startItem: number;
    let endItem: number;
    let totalPages: number;
    if (totalItems % pageSize === 0) {
      totalPages = totalItems / pageSize;
    } else {
      totalPages = Math.floor(totalItems / pageSize) + 1;
    }
    startItem = pageSize * (currentPage - 1) + 1;
    endItem = startItem + pageSize - 1;
    if (endItem >= totalItems) {
      endItem = totalItems;
    }
    pages = this.buttonShow(3, currentPage, totalPages);
    const paging: Paging = {
      currentPage: currentPage,
      pageSize: pageSize,
      totalPages: totalPages,
      pages: pages,
      totalItems: totalItems,
      startItem: startItem,
      endItem: endItem
    }
    return paging;
  }

  pageSizeChanges(pageSize: number, totalItems: number): Paging {
    let pages: Array<number> = [];
    let endItem: number;
    let totalPages: number;
    if (totalItems % pageSize === 0) {
      totalPages = totalItems / pageSize;
    } else {
      totalPages = Math.floor(totalItems / pageSize) + 1;
    }
    for (let i = 1; i <= totalPages; i++) {
      pages.push(i);
    }
    endItem = pageSize;
    if (endItem >= totalItems) {
      endItem = totalItems;
    }
    pages = this.buttonShow(3, 1, totalPages);
    const paging: Paging = {
      currentPage: 1,
      pageSize: pageSize,
      totalPages: totalPages,
      pages: pages,
      totalItems: totalItems,
      startItem: 1,
      endItem: endItem
    }
    return paging;
  }

  private buttonShow(size: number, currentPage: number, totalPages: number): Array<number> {
    const result: Array<number> = [];
    const aveSize = Math.floor(size / 2);
    if (currentPage === 1) {
      for (let i = 1; i <= size && i <= totalPages; i++) {
        result.push(i);
      }
    } else if (currentPage === totalPages) {
      if (totalPages - size < 1) {
        for (let i = 1; i <= totalPages; i++) {
          result.push(i);
        }
      } else {
        for (let i = totalPages - size + 1; i < totalPages; i++) {
          result.push(i);
        }
      }
    } else {
      if (currentPage - aveSize < 1) {
        for (let i = 1; i <= size && i <= totalPages; i++) {
          result.push(i);
        }
      } else if (currentPage + aveSize > totalPages) {
        if (totalPages - size >= 0) {
          for (let i = totalPages - size + 1; i <= totalPages; i++) {
            result.push(i);
          }
        } else {
          for (let i = 1; i <= totalPages; i++) {
            result.push(i);
          }
        }
      } else {
        for (let i = currentPage - aveSize; i <= currentPage + aveSize; i++) {
          result.push(i);
        }
      }
    }
    return result;
  }

}
