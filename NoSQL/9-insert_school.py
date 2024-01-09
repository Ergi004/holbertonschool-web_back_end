#!/usr/bin/env python3
"""
Insert school module
"""


 def insert_school(mongo_collection, **kwargs):
    """
    insert school function
    """
    return (mongo_collection.insert_one(kwargs)).inserted_id
