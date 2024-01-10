#!/usr/bin/env python3
"""
Simple helper module
"""


def index_range(page, page_size):
    """
    Function to calculate the start and the end index for pagination
    """

    start_index = (page - 1) * page_size
    end_index = page * page_size
    return start_index, end_index
