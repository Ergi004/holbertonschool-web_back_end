#!/usr/bin/env python3
"""
Simple helper module
"""
import csv
import math
from typing import List


class Server:
    """
    Server class to paginate a database of popular baby names.
    """
    DATA_FILE = "Popular_Baby_Names.csv"

    def __init__(self):
        """
        innit module
        """
        self.__dataset = None

    def dataset(self) -> List[List]:
        """
        Cached dataset
        """
        if self.__dataset is None:
            with open(self.DATA_FILE) as f:
                reader = csv.reader(f)
                dataset = [row for row in reader]
            self.__dataset = dataset[1:]

        return self.__dataset

    def get_page(self, page: int = 1, page_size: int = 10) -> List[List]:
        """
        Return the appropriate page of the dataset.
        """
        assert isinstance(page, int) and page > 0, (
            "page should be an integer greater than 0"
        )
        assert isinstance(page_size, int) and page_size > 0, (
            "page_size should be an integer greater than 0"
        )

        start_index, end_index = index_range(page, page_size)
        if start_index < len(self.dataset()):
            return self.dataset()[start_index:end_index]
        else:
            return []

    def get_hyper(self, page: int = 1, page_size: int = 10) -> List[List]:
        """
        Return a dictionary with pagination information
        """
        data = self.get_page(page, page_size)
        total_pages = math.ceil(len(self.dataset()) / page_size)

        return {
            "page_size": len(data),
            "page": page,
            "data": data,
            "next_page": page + 1 if page < total_pages else None,
            "prev_page": page - 1 if page > 1 else None,
            "total_pages": total_logs,
        }


def index_range(page, page_size):
    """
    Function to calculate the start and the end index for pagination
    """

    start_index = (page - 1) * page_size
    end_index = page * page_size
    return start_index, end_index
