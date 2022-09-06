#
# Copyright (c) 2022 Airbyte, Inc., all rights reserved.
#

from collections import OrderedDict
from typing import Any, Iterable, List, Mapping, MutableMapping, Optional

# Basic full refresh stream
import requests
import zeep
from airbyte_cdk.models import SyncMode
from airbyte_cdk.sources.streams.http import HttpStream
from netsuitesdk import NetSuiteConnection


class NetsuiteSoapStream(HttpStream):
    def __init__(self, nc: NetSuiteConnection, name: str, config: dict, concurrency_limit: int = 1):
        self.config = config
        super().__init__()
        self.obj_name = name
        self.nc = nc

        self.concurrency_limit = concurrency_limit

        self.entities_will_have_array_structure = ["VendorBill", "JournalEntry", "ExpenseReport", "ExpenseCategories"]

    url_base = "/"

    @staticmethod
    def as_serialized(data) -> Iterable[Mapping[str, Any]]:
        return [zeep.helpers.serialize_object(_) for _ in data]

    def is_entities_or_dicts_inside_list(self, data: list) -> bool:
        first_element = data[0]
        if isinstance(first_element, OrderedDict):
            return False
        elif isinstance(first_element, list):
            self.is_entities_or_dicts_inside_list(first_element)
        return True

    def compromise_structure(self, class_object: list, type_name: str) -> object:
        if (
            class_object[0].__class__.__name__ in self.entities_will_have_array_structure
            or type_name in self.entities_will_have_array_structure
            or not self.is_entities_or_dicts_inside_list(class_object)
        ):
            class_object = [class_object]

        return class_object

    def path(
        self, stream_state: Mapping[str, Any] = None, stream_slice: Mapping[str, Any] = None, next_page_token: Mapping[str, Any] = None
    ) -> str:
        return self.obj_name

    def post(self, data) -> OrderedDict:
        pass

    def read_records(
        self,
        sync_mode: SyncMode,
        cursor_field: List[str] = None,
        stream_slice: Mapping[str, Any] = None,
        stream_state: Mapping[str, Any] = None,
    ) -> Iterable[Mapping[str, Any]]:
        _record_class = getattr(self.nc, self.obj_name)
        _records = list(_record_class.get_all_generator())
        _records = self.compromise_structure(_records, _record_class.type_name)

        return [self.as_serialized(record) for record in _records][0]

    def next_page_token(self, response: requests.Response) -> Optional[Mapping[str, Any]]:
        return None

    def request_params(
        self, stream_state: Mapping[str, Any], stream_slice: Mapping[str, any] = None, next_page_token: Mapping[str, Any] = None
    ) -> MutableMapping[str, Any]:
        return {}

    def parse_response(self, response: requests.Response, **kwargs) -> Iterable[Mapping]:
        yield {}


class Accounts(NetsuiteSoapStream):
    primary_key = "internalId"


class Classifications(NetsuiteSoapStream):
    primary_key = "internalId"


class Departments(NetsuiteSoapStream):
    primary_key = "internalId"


class Currencies(NetsuiteSoapStream):
    primary_key = "internalId"


class Locations(NetsuiteSoapStream):
    primary_key = "internalId"


class VendorBills(NetsuiteSoapStream):
    primary_key = "internalId"


# class VendorCredits(NetsuiteSoapStream):
#     primary_key = "internalId"


class Vendors(NetsuiteSoapStream):
    primary_key = "internalId"


class VendorPayments(NetsuiteSoapStream):
    primary_key = "internalId"


class Subsidiaries(NetsuiteSoapStream):
    primary_key = "internalId"


class JournalEntries(NetsuiteSoapStream):
    primary_key = "internalId"


class Employees(NetsuiteSoapStream):
    primary_key = "internalId"


class ExpenseCategories(NetsuiteSoapStream):
    primary_key = "internalId"


class ExpenseReports(NetsuiteSoapStream):
    primary_key = "internalId"


class Folders(NetsuiteSoapStream):
    primary_key = "internalId"


class Files(NetsuiteSoapStream):
    primary_key = "internalId"


class Customers(NetsuiteSoapStream):
    primary_key = "internalId"


class Projects(NetsuiteSoapStream):
    primary_key = "internalId"


class Terms(NetsuiteSoapStream):
    primary_key = "internalId"


class TaxItems(NetsuiteSoapStream):
    primary_key = "internalId"


class TaxGroups(NetsuiteSoapStream):
    primary_key = "internalId"


# class BillingAccounts(NetsuiteSoapStream):
#     primary_key = "internalId"


# class CustomLists(NetsuiteSoapStream):
#     primary_key = "internalId"


# class CustomSegments(NetsuiteSoapStream):
#     primary_key = "internalId"


# class CustomRecords(NetsuiteSoapStream):
#     primary_key = "internalId"


# class CustomRecordTypes(NetsuiteSoapStream):
#     primary_key = "internalId"

# class Usages(NetsuiteSoapStream):
#     primary_key = "internalId"