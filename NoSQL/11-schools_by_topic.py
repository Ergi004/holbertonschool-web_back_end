#!/usr/bin/env python3
"""
Insert school module
"""


def schools_by_topic(mongo_collection, topic):
   """
   Function that lists school by topics
   """

   value = {"topics": topic}
    return mongo_collection.find(value)
