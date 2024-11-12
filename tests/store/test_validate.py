"""Test schema validation."""
from typing import Any

import pytest
from voluptuous import Invalid

from supervisor.const import ATTR_REPOSITORIES
from supervisor.store.validate import SCHEMA_STORE_FILE, repositories


@pytest.mark.parametrize(
    "config",
    [
        {},
        {ATTR_REPOSITORIES: []},
        {ATTR_REPOSITORIES: ["https://gitee.com/smart-assistant/esphome"]},
    ],
)
async def test_default_config(config: dict[Any]):
    """Test built-ins included by default."""
    conf = SCHEMA_STORE_FILE(config)
    assert ATTR_REPOSITORIES in conf
    assert "core" in conf[ATTR_REPOSITORIES]
    assert "local" in conf[ATTR_REPOSITORIES]
    assert "https://gitee.com/smart-assistant/repository" in conf[ATTR_REPOSITORIES]
    assert (
        len(
            [
                repo
                for repo in conf[ATTR_REPOSITORIES]
                if repo == "https://gitee.com/smart-assistant/esphome"
            ]
        )
        == 1
    )


@pytest.mark.parametrize(
    "repo_list,valid",
    [
        ([], True),
        (["core", "local"], True),
        (["https://gitee.com/smart-assistant/repository"], True),
        (["not_a_url"], False),
        (["https://fail.com/duplicate", "https://fail.com/duplicate"], False),
    ],
)
async def test_repository_validate(repo_list: list[str], valid: bool):
    """Test repository list validate."""
    if valid:
        processed = repositories(repo_list)
        assert len(processed) == 5
        assert set(repositories(repo_list)) == {
            "core",
            "local",
            "https://gitee.com/smart-assistant/repository",
            "https://gitee.com/smart-assistant/esphome",
            "https://gitee.com/smart-assistant/music-assistant",
        }
    else:
        with pytest.raises(Invalid):
            repositories(repo_list)
