#!/usr/bin/env python3
"""
List all documents module
"""


def list_all(mongo_collection):
    """
    List all function
    """
    return mongo_collection.find()
