import {
  Modal,
  Box,
  Checkbox,
  Grid,
  TextInput,
  Text,
  Group,
  ActionIcon,
} from "@mantine/core";
import sortBy from "lodash/sortBy";
import { useDebouncedValue, useMediaQuery } from "@mantine/hooks";
import { DataTable, DataTableSortStatus } from "mantine-datatable";
import { useEffect, useState } from "react";
import { UserData } from "./data";
import * as GrIcons from "react-icons/gr";
import * as AiIcons from "react-icons/ai";
import * as BiIcons from "react-icons/bi";

const PAGE_SIZES = [10, 15, 20];

export function PaginationTable() {
  const [pageSize, setPageSize] = useState(PAGE_SIZES[1]);
  const [query, setQuery] = useState("");
  const [debouncedQuery] = useDebouncedValue(query, 200);

  useEffect(() => {
    setPage(1);
  }, [pageSize]);

  const [page, setPage] = useState(1);
  const [records, setRecords] = useState(UserData.slice(0, pageSize));
  const isMobile = useMediaQuery("(max-width: 600px)");

  const [opened, setOpened] = useState(false);

  useEffect(() => {
    const from = (page - 1) * pageSize;
    const to = from + pageSize;
    setRecords(UserData.slice(from, to));
  }, [page, pageSize]);

  useEffect(() => {
    setRecords(
      UserData.filter(({ firstName, lastName, email }) => {
        if (
          debouncedQuery !== "" &&
          !`${firstName} ${lastName} ${email}`
            .toLowerCase()
            .includes(debouncedQuery.trim().toLowerCase())
        ) {
          return false;
        }
        return true;
      })
    );
  }, [debouncedQuery]);

  return (
    <div>
      <Box sx={{ height: 600 }}>
        <TextInput
          sx={{ flexBasis: "60%" }}
          placeholder="Search employees..."
          //icon={<Search size={16} />}
          value={query}
          onChange={(e) => setQuery(e.currentTarget.value)}
        />
        <DataTable
          withBorder
          borderRadius="md"
          shadow="md"
          withColumnBorders
          striped
          highlightOnHover
          horizontalSpacing="xs"
          verticalSpacing="xs"
          fontSize="sm"
          verticalAlignment="center"
          records={records}
          columns={[
            { accessor: "firstName", width: 100 },
            { accessor: "lastName", width: 100 },
            { accessor: "email", width: "100%" },
            {
              accessor: "actions",
              title: <Text mr="xs">Row actions</Text>,
              textAlignment: "right",
              render: (company) => (
                <Group spacing={4} position="right" noWrap>
                  <ActionIcon color="green" onClick={() => setOpened(true)}>
                    <GrIcons.GrView size={16} />
                  </ActionIcon>
                  <ActionIcon color="blue" onClick={() => setOpened(true)}>
                    <AiIcons.AiOutlineEdit size={16} />
                  </ActionIcon>
                  <ActionIcon color="red" onClick={() => setOpened(true)}>
                    <BiIcons.BiTrash size={16} />
                  </ActionIcon>
                </Group>
              ),
            },
          ]}
          totalRecords={UserData.length}
          recordsPerPage={pageSize}
          page={page}
          onPageChange={(p) => setPage(p)}
          recordsPerPageOptions={PAGE_SIZES}
          onRecordsPerPageChange={setPageSize}
        />
      </Box>

      <Modal
        size="auto"
        fullScreen={isMobile}
        opened={opened}
        onClose={() => setOpened(!opened)}
        transition="fade"
        transitionDuration={600}
        transitionTimingFunction="ease"
        title="Introduce yourself!"
      >
        {/* Modal content */}
      </Modal>
    </div>
  );
}
